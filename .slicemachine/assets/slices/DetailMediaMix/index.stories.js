import MyComponent from '../../../../slices/DetailMediaMix';

export default {
  title: 'slices/DetailMediaMix'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"detail_media_mix","items":[],"primary":{"media1":{"link_type":"Web","url":"http://twitter.com"},"media1Autoplay":true,"media2":{"link_type":"Web","url":"http://google.com"},"media2Autoplay":true},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _3411 = () => <MyComponent slice={{"variation":"3411","name":"3/4 + 1/1","slice_type":"detail_media_mix","items":[],"primary":{"media1":{"link_type":"Web","url":"http://twitter.com"},"media1Autoplay":false,"media2":{"link_type":"Web","url":"http://google.com"},"media2Autoplay":true},"id":"_3411"}} />
_3411.storyName = '3/4 + 1/1'

export const _4545 = () => <MyComponent slice={{"variation":"4545","name":"4/5 + 4/5","slice_type":"detail_media_mix","items":[],"primary":{"media1":{"link_type":"Web","url":"http://twitter.com"},"media1Autoplay":false,"media2":{"link_type":"Web","url":"https://prismic.io"},"media2Autoplay":false},"id":"_4545"}} />
_4545.storyName = '4/5 + 4/5'

export const _11Filter = () => <MyComponent slice={{"variation":"11Filter","name":"11Filter","slice_type":"detail_media_mix","items":[],"primary":{"media1":{"link_type":"Web","url":"http://google.com"},"media1Autoplay":false,"media2":{"link_type":"Web","url":"https://slicemachine.dev"},"media2Autoplay":false},"id":"_11Filter"}} />
_11Filter.storyName = '11Filter'
