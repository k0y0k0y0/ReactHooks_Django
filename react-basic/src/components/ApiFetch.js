import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ApiFetch = () => {

  const [posts, setPosts] = useState([])
  const [id, setId] = useState(1)
  const [clicked, setClicked] = useState(false)

  const handlerClicked = () => {
    setClicked(!clicked)
  }

  useEffect(() => {
    //axiosの場合
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then(res => {
    //   setPosts(res.data)
    // })

    //fetchの場合
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: 'GET'})
    .then(res => res.json())
    .then(data => {
      setPosts(data)
    })
  }, [clicked])

  return (
    <div>
      {/* <ul>
        {
          posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul> */}
      <input type='text' value={id} onChange={evt=>setId(evt.target.value)} />
      <br />
      <button type='button' onClick={handlerClicked}>Get post</button>
      <br />
      {posts.title}
    </div>
  )
}

export default ApiFetch
