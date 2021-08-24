const applicationKey = '3118f455a4aff47f5b83b0f916f9159dbb22404661ce6ae11fc572018444672a';
const clientKey = 'a0a4a8d4006516baed385a7e3dce8912c1cb7a1a3e7b7ddb05d35819655ffdea';
const ncmb = new NCMB(applicationKey, clientKey);

$(() => {
  async function saveNCMB(target, className, scriptName) {
    const params = $(target).serializeArray();
    const Contact = ncmb.DataStore(className);
    const contact = new Contact;
    for (const key of params) {
      contact.set(key.name, key.value)
    }
    const acl = new ncmb.Acl;
    acl.setRoleReadAccess('Admin', true);
    contact.set('acl', acl);
    await contact.save();
    return ncmb
      .Script
      .data({objectId: contact.objectId})
      .exec('POST', scriptName);
  }

  $('form#writing_ebook').on('submit', async (e) => {
    e.preventDefault();
    try {
      await saveNCMB(e.target, 'WritingEbook', 'writing_ebook.js');
      $('#mauticform_devrelwenihewase_message').html(
        '登録ありがとうございます。メールにてダウンロードURLをご連絡いたします'
      );
    } catch (e) {
      alert('エラーが発生しました。後ほど再度実行してください');
    }
  });

  
  $('form#contact').on('submit', async (e) => {
    e.preventDefault();
    try {
      await saveNCMB(e.target, 'Contact', 'mail.js');
      $('#mauticform_devrelwenihewase_message').html(
        'お問い合わせありがとうございます。内容を確認の上、折り返しご連絡いたします'
      );
    } catch (e) {
      console.error(e);
    }
  });
})
