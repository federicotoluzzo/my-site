import Separator from "@/props/Separator";

export default function Home() {
  return (
    <>
      <h2>My Projects</h2>
      <Separator/>
      <div className="overflow-clip lg:grid grid-cols-2">
        <div className="m-8 line self-center">
          <h3 className="mb-4">AoC 2024</h3>
          <p>Advent of Code 2024 was a great opportunity to learn something new: instead of focusing on completing the tasks, I chose to use Rust, a highly performant language which is recently getting a lot of praise. <br></br>Eventually, I couldn&#39;t make it past day 6, but I learned a lot in the process. <br></br>This was my attempt at day 5 part 2, which showed me how bad O(n*n!) is.</p>
        </div>
        
        <div className="mockup-code block m-8">
          <pre data-prefix="1"><code>{"fn bogosort(mut arr: &mut Vec<i32\>, rules:HashMap<i32, HashSet<i32>>){"}</code></pre>
          <pre data-prefix="2"><code>{"  let mut vec = arr.clone();"}</code></pre>
          <pre data-prefix="3"><code>{"  let mut arrcpy = arr.clone();"}</code></pre>
          <pre data-prefix="4"><code>{"  while(!is_ordered(vec.clone(), rules.clone())){"}</code></pre>
          <pre data-prefix="5"><code>{"    vec.clear();"}</code></pre>
          <pre data-prefix="6"><code>{"    arrcpy = arr.clone();"}</code></pre>
          <pre data-prefix="7"><code>{"    while !arrcpy.is_empty(){"}</code></pre>
          <pre data-prefix="8"><code>{"      let rand = rand::random_range(0..arrcpy.len());"}</code></pre>
          <pre data-prefix="9"><code>{"      let num = arrcpy[rand];"}</code></pre>
          <pre data-prefix="10"><code>{"      vec.push(num);"}</code></pre>
          <pre data-prefix="11"><code>{"      arrcpy.remove(rand);"}</code></pre>
          <pre data-prefix="12"><code>{"    }"}</code></pre>
          <pre data-prefix="13"><code>{"    arr.append(&mut vec);"}</code></pre>
          <pre data-prefix="14"><code>{"    println!(\"SUCCESS\");"}</code></pre>
          <pre data-prefix="15"><code>{"  }"}</code></pre>
        </div>
      </div>
      <Separator />
      <div className="overflow-clip lg:grid grid-cols-2">
        <div className="m-8 h-full w-fit mx-auto">
          <div className="mockup-phone hidden lg:inline-block">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1"><iframe src="https://fuffo.net" className="h-full w-full"></iframe></div>
            </div>
          </div>
          <div className="mockup-browser bg-base-300 border inline-block mx-auto lg:hidden max-w-[80%] min-h-o lg:w-full" style={{ maxWidth: "80vw" }}>
            <div className="mockup-browser-toolbar">
              <div className="input">https://fuffo.net</div>
            </div>
            <iframe src="https://fuffo.net" className="h-full w-full"></iframe>
          </div>
        </div>
        <div className="m-8 line content-center">
          <h3 className="mb-4">This website</h3>
          <p>This website was made in an effort to learn <a href="https://nextjs.org/">Next.js</a> and <a href="https://react.dev/">React</a>. <br></br>
            Also, despite it not being planned, I&#39;m using tailwind and daisyui.
          </p>
          
        </div>
      </div>
      
    </>
  );
}
