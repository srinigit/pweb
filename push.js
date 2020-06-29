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

let sub = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/fwMG_ImcKYc:APA91bHtTnPUQ0tBehI7Kk1CGn4s3yhIKhJunhqiggl5XxbyVPmqxDkugwctQMzL2VDTrG_ypKwWqb1Djv-kqWbxpmsatPSjSAUldFENqCIZShaFvZFiCwH-X2hS0-Xjqv5mq2XYHcf9',
  expirationTime: null,
  keys: {
    p256dh:
      'BLHrTAa9dZ4LV5DoCgtXCXLMd21_S3qyt4eSqn6UQCjIEAuemY0QI29Mvc-LL02e0DLGPKd3xkVHjCD4eqJWHSg',
    auth: 'TW-LBZmYtXNW7VQUPX4I0w'
  }
};

push.sendNotification(sub, 'test message');
