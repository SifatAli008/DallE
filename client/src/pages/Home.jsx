import React,{useState,useEffect} from 'react'
import { Loader,Card,FormField } from '../components';

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#6449ff] text-tl uppercase">
      {title}
    </h2>
  );
};



const Home = () => {
  const [loading,setLoading] = useState(false);
  const [allPosts,setAllPosts] = useState(null);

  const [SearchText, setSearchText] = useState("");

  
  return (
      <section className="max-w-7xl mx-auto">
       <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>The Community ShowCase</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>Browes througe a collection for imaginative and visually stunning image generated bi Imag in AI.</p>
       </div>

       <div className="mt-16">
        <FormField/>
       </div>

        <div className='mt-10'>
           {loading ? (
           <div className='flex justify-center items-center'>
           <Loader/>
           </div>):(
            <>
            {SearchText && (
              <h2 className="font-medium text-[#666e75]> text-xl mb-3">
                  Showing result for <span className="text-[#222328]">{SearchText}</span>
               </h2>
              )}
              <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-2 grid-1 gap-3'>
               {SearchText ? (<RenderCards
                    data={[]}
                    title="No search result Found"
                />):(<RenderCards
                   data={[]}
                  title="No posts Found"/> )}
              </div>
            </>
           )}
      </div>
      </section>

  )
}

export default Home;