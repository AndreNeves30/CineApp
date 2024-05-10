import data from "../../articles.json"

function Home() {
    console.log(data)
    return ( 
    <>
   
       <input type="text" 
       name="searchPosts" 
       id="searchPosts" 
       placeholder="Busque aqui" />
    <div className="grid grid-cols-3 gap-5">
       {data.map((artigo,index) =>(
            <div key={index}>
                <h1>{artigo.title}</h1>
                {artigo.image ?<img src={artigo.image}/>:
                "Img not found"}
                <div>
                    {
                        artigo.tags.map( tag =>(
                            <span key={tag}>
                                {tag}
                            </span>
                        ))
                    }
                </div>
                <div>
                    {
                        artigo.text.map((texto,index) =>(
                            <span key={index}>
                                {texto}
                            </span>
                        ))}
                </div>
            </div>
       ))}
    </div>

    </>
     );
}

export default Home;