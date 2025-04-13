---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  // VPTeamPageSection
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/108746194?s=96&v=4',
    name: 'Eonova',
    title: '一个不太正经的前端Coder',
    links: [
      { icon: 'github', link: 'https://github.com/eonova' },
      { icon: 'x', link: 'https://twitter.com/030Eonova' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      开发成员
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />

  <!-- 其他成员 -->
  <!--
  <VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>Lorem ipsum...</template>
    <template #members>
      <VPTeamMembers :members="members" />
    </template>
  </VPTeamPageSection>
   -->
</VPTeamPage>
