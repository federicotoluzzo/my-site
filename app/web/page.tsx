import React from 'react'

const page = () => {
  return (
    <>
      <div className='flex flex-col w-6/12 items-center justify-center mx-auto'>
        <h1>test</h1>
        <p>Per mostrare informazioni sulle pagine web, vengono usati principalmente tre linguaggi:</p>
        <div className="self-center m-10">
          <div className="my-10">
            <h3>HTML (HyperText Markup Language)</h3>
            <p>HTML consente di definire la struttura generale della pagina</p>
          </div>
          <div className="my-10">
            <h3>CSS (Cascadind Style Sheet)</h3>
            <p>
              CSS descrive gli stili degli elementi definiti nell&apos;html.
              Può essere usato per cambiare il colore del testo, dello sfondo, la dimensione di un elemento etc...
            </p>
          </div>
          <div className="my-10">
            <h3>JS (JavaScript)</h3>
            <p>
              Dei tre, JavaScript è l&apos;unico che può essere definito un vero linguaggio di programmazione.
              Ha una sintassi simile a java, però ha alcune differenze importanti.
              Per esempio non ha un sistema di tipi e viene interpretato dal browser quindi se per esempio cerchiamo di sommare due variabili, una contenente un numero e l&apos;altra una stringa, l&apos;errore ci verrà comunicato solo quando verrà eseguito il codice.
            </p>
          </div>
        </div>
        <div className="self-center flex">
          <img className="aspect-square h-32 m-10 rounded-3xl shadow-xl hover:h-40 hover:m-6 transition-all" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F001%2F416%2F705%2Foriginal%2Fhtml5-emblem-orange-shield-and-white-text-vector.jpg&f=1&nofb=1&ipt=231bcd0f692cd9a0dfc613932f5283b487330f2d0b458ce93df7d220cff13758&ipo=images"></img>
          <img className="aspect-square h-32 m-10 rounded-3xl shadow-xl hover:h-40 hover:m-6 transition-all" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.yUIb5S_kj98Eg5tT-Onx1AHaHa%26pid%3DApi&f=1&ipt=3be4f7c4277a32e5d668005f2e327ea416c43476ca39e1dd2883b1e58e2454f9&ipo=images"></img>
          <img className="aspect-square h-32 m-10 rounded-3xl shadow-xl hover:h-40 hover:m-6 transition-all" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.3YPrI1KPJsome_gJYQJR3wAAAA%26pid%3DApi&f=1&ipt=24dbabd94a3c1728036aba28c47f07b681f155f7039c3200f2680e42af590905&ipo=images"></img>
        </div>
      </div>
    </>
  )
}

export default page