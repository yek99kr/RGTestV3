import MyComponent from '../../../../slices/DetailMedia1X1';

export default {
  title: 'slices/DetailMedia1X1'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"detail_media1_x1","items":[],"primary":{"media1":{"link_type":"Web","url":"https://prismic.io"},"media1Autoplay":true,"media2":{"link_type":"Web","url":"http://google.com"},"media2Autoplay":false,"media3":{"link_type":"Web","url":"https://prismic.io"},"media3Autoplay":true},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _2Rows = () => <MyComponent slice={{"variation":"2Rows","name":"2Rows","slice_type":"detail_media1_x1","items":[],"primary":{"media1":{"link_type":"Web","url":"http://google.com"},"media1Autoplay":false,"media2":{"link_type":"Web","url":"https://slicemachine.dev"},"media2Autoplay":true,"onMobile":false},"id":"_2Rows"}} />
_2Rows.storyName = '2Rows'

export const _1Big2Smalls = () => <MyComponent slice={{"variation":"1Big2Smalls","name":"1Big + 2Smalls","slice_type":"detail_media1_x1","items":[],"primary":{"media1":{"link_type":"Web","url":"https://prismic.io"},"media1Autoplay":false,"media2":{"link_type":"Web","url":"https://slicemachine.dev"},"media2Autoplay":true,"media3":{"link_type":"Web","url":"http://google.com"},"media3Autoplay":true},"id":"_1Big2Smalls"}} />
_1Big2Smalls.storyName = '1Big + 2Smalls'
