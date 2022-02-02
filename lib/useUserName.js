import useSWR from 'swr'
import { getToken } from './userAuth'


const useUserName = id => {
  const NAME_URL = `${process.env.NEXT_PUBLIC_API_URL}/golfers/${id}/name`
  const fetcher = async url => {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })

    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.')
      // Attach extra info to the error object.
      error.info = await res.json()
      error.status = res.status
      throw error
    }
    return res.json().then(data => data.name)
  }

  const { data } = useSWR(NAME_URL, fetcher)
  return {
    name: data,
  }
}

export default useUserName
