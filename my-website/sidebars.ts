import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // 使用自动生成的侧边栏,并手动添加 hello.md
  tutorialSidebar: [
    'hello', // 手动添加 hello.md
    {
      type: 'autogenerated',
      dirName: '.',
    },
  ],
};

export default sidebars;
