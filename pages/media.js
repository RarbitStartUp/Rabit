// export const media = [
//   'https://images.unsplash.com/photo-1623341214825-9f4f963727da?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFtZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900',
//   'https://images.unsplash.com/photo-1557872943-16a5ac26437e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900',
// ]
import media1 from '../public/img/media/media-1.jpg'
import media2 from '../public/img/media/media-2.jpg'

export const media = [media1, media2]
export const mediaByIndex = (index) => media[index % media.length]
