import { defineConfig } from 'tsup'
import { copyFileSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

export default defineConfig({
  format: ['esm', 'cjs'],
  entry: ['src/index.ts'],
  outDir: 'dist',
  splitting: false,
  sourcemap: true,
  treeshake: true,
  clean: true,
  dts: true,
  external: ['vue'],
  onSuccess: async () => {
    // 复制 directives.d.ts 到 dist 目录
    copyFileSync(
      join(__dirname, 'src/directives.d.ts'),
      join(__dirname, 'dist/directives.d.ts')
    )
    
    // 在生成的类型定义文件开头添加对 directives.d.ts 的引用
    const dtsFiles = ['dist/index.d.ts', 'dist/index.d.mts']
    dtsFiles.forEach((file) => {
      const filePath = join(__dirname, file)
      try {
        const content = readFileSync(filePath, 'utf-8')
        // 如果还没有引用，则添加
        if (!content.includes('/// <reference')) {
          const reference = '/// <reference path="./directives.d.ts" />\n'
          writeFileSync(filePath, reference + content)
        }
      } catch (error) {
        // 文件可能不存在，忽略错误
        console.warn(`Warning: Could not process ${file}:`, error)
      }
    })
  },
})
