var push = require('web-push');


let vapidKeys = {
	publicKey: 'BEfAtEiv3_dlPk8hYEud6keLnJgmNV4QQfccTAoSQ07ZRK2YWrYMMBjUsS9Ib000DhY_c-eN_7qg1mnHUwKfkLA',
  	privateKey: '9nzfcfNP3zvPH0ncJEVKh_BXFZQVjW2MRa9yIIHbcQ0'
};

push.setVapidDetails(
  'mailto:test@code.co.uk',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/d9iQiZztMCo:APA91bFMN42TW9VcTrmhZYAXzHq_xu-Ne2P1mgr_gEZIZidedvIxRFf4CND1KwVvOX9scsgT7igiN_z6Wqv_D2JBNq4rr9JSIIr1grfJMCGF_8ofTYdpbM1E9TLDy_V1c7BdjZXIWz3I","expirationTime":null,"keys":{"p256dh":"BDFL1Vq3a_tLnSAUR9xpNnV-eTOxn3Hh5U2tBs0sjhaWdmJ_g2DaVXtNpB1mqKU79iUcRvhQSxenLFDRChrVHI4","auth":"dk3pTjXlAW-ltFLnWDsqvg"}};

push.sendNotification(sub, 'test message');
