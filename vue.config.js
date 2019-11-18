const path = require('path');
const Spritesmith = require('webpack-spritesmith');
const templateFunction = function(data) {
  var shared = '.icon { display: inline-block; vertical-align: middle; background-image: url(I) }'.replace(
    'I',
    data.sprites[0].image
  );

  var perSprite = data.sprites
    .map(function(sprite) {
      return '.icon-N { width: Wpx; height: Hpx; background-position: Xpx Ypx; }'
        .replace('N', sprite.name)
        .replace('W', sprite.width)
        .replace('H', sprite.height)
        .replace('X', sprite.offset_x)
        .replace('Y', sprite.offset_y);
    })
    .join('\n');

  return shared + '\n' + perSprite;
};

module.exports = {
  devServer: {
    port: 12365
    // proxy: {  //开启代理无法携带 cookie,后端无法判断请求正确性，返回401
    //   '/api': {
    //     target: 'http://ylwapi.t.nxin.com',
    //     ws: true,
    //     changeOrigin: true,
    //     pathRequiresRewrite: {
    //       '^/api': '/'
    //     }
    //   }
    // }
  },
  chainWebpack: config => {
    // 将小图标拼接成雪碧图
    config.plugin('webpack-spritesmith').use(Spritesmith, [
      {
        src: {
          cwd: './src/assets/images/icon/',
          glob: '*.png'
        },
        target: {
          image: './src/assets/images/sprite/sprite.png',
          css: [
            [
              path.resolve(__dirname, './src/assets/scss/icon/_sprite.scss'),
              {
                // 引用自己的模板
                format: 'function_based_template'
              }
            ]
          ]
        },
        apiOptions: {
          cssImageRef: '../../images/sprite/sprite.png'
        },
        customTemplates: {
          function_based_template: templateFunction
        },
        spritesmithOptions: {
          algorithm: 'binary-tree',
          padding: 10
        }
      }
    ]);
  },
  css: {
    sourceMap: true
  }
  // configureWebpack: {
  //   externals: {
  //     AMap: 'AMap'
  //   }
  // }
};
