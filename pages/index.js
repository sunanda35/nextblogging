import { loadDB } from '../production/firebase'
import { useAmp } from 'next/amp'
export const config = {
  amp: 'hybrid',
}

export default function Index({data}) {
  const isAmp = useAmp();
  console.log(data)
  return (
    <div>
      <h1>Fuck it</h1>
  </div>
  )
}

Index.getInitialProps = async function () {
  const db = await loadDB()
  let data = []
  const querySnapshot = await db.firestore().collection('posts').get()
  querySnapshot.forEach(doc => {
    data.push(doc.data())
  })

  return {
    data: data
  }
}
