import MyComponent from '../../../../slices/DetailMedia9X16';

export default {
  title: 'slices/DetailMedia9X16'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"detail_media9_x16","items":[],"primary":{"media1":{"link_type":"Web","url":"https://prismic.io"},"media1Autoplay":false,"media2":{"link_type":"Web","url":"https://prismic.io"},"media2Autoplay":false,"media3":{"link_type":"Web","url":"https://prismic.io"},"media3Autoplay":true},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _2Rows = () => <MyComponent slice={{"variation":"2Rows","name":"2Rows","slice_type":"detail_media9_x16","items":[],"primary":{"media1":{"link_type":"Web","url":"http://twitter.com"},"media1Autoplay":false,"media2":{"link_type":"Web","url":"http://google.com"},"media2Autoplay":true},"id":"_2Rows"}} />
_2Rows.storyName = '2Rows'
