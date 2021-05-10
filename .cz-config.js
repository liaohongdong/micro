/*
 * @Author: hongdong.liao
 * @Date: 2021-01-05 16:22:42
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-10 10:09:53
 * @FilePath: /microDemo/micro/.cz-config.js
 */
module.exports = {
  types: [
    { value: 'feat', name: 'ADD-FEAT: 添加新功能(A new feature)' },
    { value: 'refactor', name: 'MOD-FEAT: 修改功能(Modified old feature)' },
    { value: 'fix-feat', name: 'BUGFIX: 修复bug，附加上蝉道ID(A bug fix)' },
    { value: 'fix-hot', name: 'HOTFIX: 修复线上bug，附加上蝉道ID(A hot fix)' },
    { value: 'docs', name: 'ADD-DOCS: 添加文档(Documentation only changes)' },
    { value: 'style', name: 'MOD-STYLE: 修改/ 整理代码风格样式，不涉及逻辑更改(Changes that do not affect the meaning of the code)', },
    { value: 'refactor', name: 'MOD-REFACTOR: 重构代码(A code change that neither fixes a bug nor adds a feature)', },
    { value: 'perf', name: 'MOD-PERF:  性能优化(A code change that improves performance)', },
    { value: 'test', name: 'ADD-TEST: 添加测试用例 (Adding missing tests)' },
    { value: 'chore', name: 'MOD: 更改配置文件(Changes to the build process or auxiliary tools and libraries such as documentation generation)', },
    { value: 'revert', name: 'DEL: 删除代码(Revert to a commit)' },
  ],
  scopes: [
    { name: 'all' },
    { name: 'micro-core' },
    { name: 'micro-http' },
    { name: 'micro-util' },
    { name: 'micro-router' },
    { name: 'eslint-config-micro' },
  ],
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',
  messages: {
    type: "请选择提交类型(Select the type of change that you're committing):",
    scope: '\n选择影响范围\n(Denote the SCOPE of this change.):',
    subject: '请写下修改摘要(Write a SHORT, IMPERATIVE tense description of the change):\n',
    body: '请写下修改详情，使用"|"进行换行(Provide a LONGER description of the change (optional). Use "|" to break new line):\n',
    breaking: '写下所有不兼容修改(可选)(List any BREAKING CHANGES (optional):\n',
    footer: '修复的蝉道bug号(可选)(List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:)\n',
    confirmCommit: '确定提交？(Are you sure you want to proceed with the commit above?)',
  },
  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],
  subjectLimit: 100,
};
