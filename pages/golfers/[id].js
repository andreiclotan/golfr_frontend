import Layout from '../../components/Layout'
import ScoreCard from '../../components/ScoreCard'
import useUserScores from '../../lib/useUserScores'
import { useRouter } from 'next/router'
import useUserName from '../../lib/useUserName'


const Profile = () => {
  const router = useRouter()
  const { id } = router.query
  const { scores, error } = useUserScores(id)
  const { name } = useUserName(id)

  if (!name) {
    return <Layout> User not found </Layout>
  }

  return (
    <Layout>
      <>
        {error ? (
          error
        ) : (
          <>
            <h1> Scorers for {name}: </h1>
            {scores && scores.map(score => (
              <ScoreCard
                key={score.id}
                id={score.id}
                totalScore={score.total_score}
                playedAt={score.played_at}
                userId={score.user_id}
                userName={score.user_name}
              />
            ))}
          </>
        )}
      </>
    </Layout>
  )
}

export default Profile
