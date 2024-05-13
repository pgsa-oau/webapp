import { useState, useEffect } from 'react'
import CarouselSection from '../components/Carousel'
import HeroSection from '../components/HeroSection'
import AimsAndObjectives from '../components/AimsAndObjectives'
import { pageData } from '../components/pageData'
import { Link } from 'react-router-dom'
import { post } from '../types'

import NewsCard from '../components/ui/NewsCard'
import { fetchNews } from '../utils'

const Home = () => {
    const [recentNews, setRecentNews] = useState([])

    useEffect(() => {
        const fetchRecentNews = async () => {
            const news = await fetchNews();
            const recentNews = news.slice(0, 3);

            setRecentNews(recentNews)
        }

        fetchRecentNews()
    }
    , [])

  return (
      <main className="flex h-full min-h-[95vh] flex-col gap-6 items-center justify-between p-2">
          <CarouselSection />

          <div className="flex flex-col p-4 m-2 gap-8 z-50 w-full">
              <h2 className="text-2xl font-bold text-red-500">
                  Breaking News!
              </h2>

              <div className="flex flex-col md:flex-row md:overflow-scroll gap-4">
                  {recentNews.map((post: post) => (
                      <Link
                          key={post.id}
                          to={`/board/${post.slug}`}
                          className="w-full md:w-1/3"
                      >
                          <NewsCard key={post.id} {...post} />
                      </Link>
                  ))}
              </div>
          </div>

          <div
              id="aboutUs"
              className="pt-2 flex flex-col md:flex-row gap-4 md:gap-6"
          >
              {pageData.heroAboutUs.map((item) => (
                  <HeroSection
                      key={item.title}
                      title={item.title}
                      description={item.description}
                  />
              ))}
          </div>

          <section id="aimsAndObjectives" className="w-full">
              <AimsAndObjectives />
          </section>
      </main>
  );
}

export default Home
