const commandDescriptions = Object.freeze({
  // ============================================
  // # Key binding descriptions
  // #

  'mt.hide': 'MarkText: Hide MarkText',
  'mt.hide-others': 'MarkText: Hide Others',
  'file.new-window': 'File: New Window',
  'file.new-tab': 'File: New Tab',
  'file.open-file': 'File: Open file',
  'file.open-folder': 'File: Open Folder',
  'file.save': 'File: Save',
  'file.save-as': 'File: Save As...',
  'file.move-file': 'File: Move...',
  'file.rename-file': 'File: Rename...',
  'file.quick-open': 'File: Show quick open dialog',
  'file.print': 'File: Print current Tab',
  'file.preferences': 'MarkText: Preferences',
  'file.close-tab': 'File: Close current Tab',
  'file.close-window': 'File: Close Window',
  'file.quit': 'MarkText: Quit',
  'edit.undo': 'Edit: Undo',
  'edit.redo': 'Edit: Redo',
  'edit.cut': 'Edit: Cut',
  'edit.copy': 'Edit: Copy',
  'edit.paste': 'Edit: Paste',
  'edit.copy-as-markdown': 'Edit: Copy as Markdown',
  'edit.copy-as-html': 'Edit: Copy as HTML',
  'edit.paste-as-plaintext': 'Edit: Paste as Plain Text',
  'edit.select-all': 'Edit: Select All',
  'edit.duplicate': 'Edit: Duplicate',
  'edit.create-paragraph': 'Edit: Create Paragraph',
  'edit.delete-paragraph': 'Edit: Delete Paragraph',
  'edit.find': 'Edit: Find',
  'edit.find-next': 'Edit: Find Next',
  'edit.find-previous': 'Edit: Find Previous',
  'edit.replace': 'Edit: Replace',
  'edit.find-in-folder': 'Edit: Find in Folder',
  'edit.screenshot': 'Edit: Make Screenshot',
  'paragraph.heading-1': 'Paragraph: Transform into Heading 1',
  'paragraph.heading-2': 'Paragraph: Transform into Heading 2',
  'paragraph.heading-3': 'Paragraph: Transform into Heading 3',
  'paragraph.heading-4': 'Paragraph: Transform into Heading 4',
  'paragraph.heading-5': 'Paragraph: Transform into Heading 5',
  'paragraph.heading-6': 'Paragraph: Transform into Heading 6',
  'paragraph.custom': 'Paragraph: Transform into custom',
  'paragraph.upgrade-heading': 'Paragraph: Upgrade Heading',
  'paragraph.degrade-heading': 'Paragraph: Degrade Heading',
  'paragraph.table': 'Paragraph: Create Table',
  'paragraph.code-fence': 'Paragraph: Transform into Code Fence',
  'paragraph.quote-block': 'Paragraph: Transform into Quote Block',
  'paragraph.math-formula': 'Paragraph: Transform into Math Formula',
  'paragraph.html-block': 'Paragraph: Transform into HTML Block',
  'paragraph.order-list': 'Paragraph: Transform into Order List',
  'paragraph.bullet-list': 'Paragraph: Transform into Bullet List',
  'paragraph.task-list': 'Paragraph: Transform into Task List',
  'paragraph.loose-list-item': 'Paragraph: Convert to Loose List Item',
  'paragraph.paragraph': 'Paragraph: Create new Paragraph',
  'paragraph.horizontal-line': 'Paragraph: Insert Horizontal Line',
  'paragraph.front-matter': 'Paragraph: Insert Front Matter',
  'format.strong': 'Format: Strong',
  'format.emphasis': 'Format: Emphasis',
  'format.underline': 'Format: Underline',
  'format.superscript': 'Format: Superscript',
  'format.subscript': 'Format: Subscript',
  'format.highlight': 'Format: Highlight',
  'format.inline-code': 'Format: Inline Code',
  'format.inline-math': 'Format: Inline Math',
  'format.strike': 'Format: Strike',
  'format.hyperlink': 'Format: Hyperlink',
  'format.image': 'Format: Insert Image',
  'format.clear-format': 'Format: Clear Format',
  'window.minimize': 'Window: Minimize',
  'window.toggle-always-on-top': 'Window: Always on Top',
  'window.zoom-in': 'Window: Zoom In',
  'window.zoom-out': 'Window: Zoom Out',
  'window.toggle-full-screen': 'Window: Toggle Full Screen',
  'view.command-palette': 'View: Show Command Palette',
  'view.source-code-mode': 'View: Toggle Source Code Mode',
  'view.typewriter-mode': 'View: Toggle Typewriter Mode',
  'view.focus-mode': 'View: Focus Mode',
  'view.toggle-sidebar': 'View: Toggle Sidebar',
  'view.toggle-toc': 'View: Toggle Table of Content',
  'view.toggle-tabbar': 'View: Toggle Tabs',
  'view.toggle-dev-tools': 'View: Show Developer Tools (Debug)',
  'view.dev-reload': 'View: Reload Window (Debug)',
  'tabs.cycle-forward': 'Misc: Cycle Tabs Forward',
  'tabs.cycle-backward': 'Misc: Cycle Tabs Backward',
  'tabs.switch-to-left': 'Misc: Switch tab to the left',
  'tabs.switch-to-right': 'Misc: Switch tab to the right',
  'tabs.switch-to-first': 'Misc: Switch tab to the 1st',
  'tabs.switch-to-second': 'Misc: Switch tab to the 2st',
  'tabs.switch-to-third': 'Misc: Switch tab to the 3st',
  'tabs.switch-to-fourth': 'Misc: Switch tab to the 4st',
  'tabs.switch-to-fifth': 'Misc: Switch tab to the 5st',
  'tabs.switch-to-sixth': 'Misc: Switch tab to the 6st',
  'tabs.switch-to-seventh': 'Misc: Switch tab to the 7st',
  'tabs.switch-to-eighth': 'Misc: Switch tab to the 8st',
  'tabs.switch-to-ninth': 'Misc: Switch tab to the 9st',
  'tabs.switch-to-tenth': 'Misc: Switch tab to the 10st',

  // ============================================
  // # Menu descriptions but not available as command
  // #

  'view.reload-images': 'View: Force reload images',

  // ============================================
  // # Additional command descriptions
  // #

  'file.toggle-auto-save': 'File: Toggle Auto Save',
  'file.import-file': 'File: Import...',
  'file.export-file': 'File: Export...',
  'file.zoom': 'Window: Zoom...',
  'file.check-update': 'MarkText: Check for Updates...',
  'paragraph.reset-paragraph': 'Paragraph: Transform into Paragraph',
  'window.change-theme': 'Theme: Change Theme...',
  'view.text-direction': 'View: Set Text Direction',
  'docs.user-guide': 'MarkText: End User Guide',
  'docs.markdown-syntax': 'MarkText: Markdown Syntax Guide'
})

export default id => {
  return commandDescriptions[id]
}
