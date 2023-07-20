module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          baseUrl: env('CDN_URL'),
          rootPath: env('CDN_ROOT_PATH'),
          s3Options: {
            accessKeyId: ('AKIAQIOOYV5WEHYDZK5N'),
            secretAccessKey: ('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'),
            region: ('us-east-2'),
            params: {
              Bucket: ('ecommerce-sttrapi-impresoras'),
            },
          },
        },
      },
    },
  });