import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
  const [textValue, setTextValue] = useState("")

  const rotateValue = Math.floor(Math.random() * 201) - 100

  return (
    <main className="p-5 flex flex-col">
      <textarea 
      onChange={(e) => setTextValue(e.target.value)}
      ref={textAreaRef}
      className="opacity-0 w-0 h-0" 
      />
      <div 
        onClick={() => textAreaRef.current!.focus()}
        className="min-h-60 bg-neutral-900 text-slate-100 font-spaceGrotesk whitespace-pro-wrap text-xl min-w-full p-5 overflow-x-hidden"
        >
          {textValue.length === 0 && (
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400">
            Tap here and add text
          </span>
        )}
          <AnimatePresence>
            {textValue.split("").map((letter, index) =>{
              return (
                <motion.span 
                  initial={{ opacity: 0, y: 100, rotate: rotateValue}}
                  animate={{ opacity: 1, y: 0, rotate: 0}}
                  exit={{
                    opacity: 0,
                    y: 100,
                    transition:{
                      duration: 0.20,
                    },
                    rotate:  rotateValue,
                  }}
                  transition={{ duration:0.5, ease: "easeIn"}}
                  key={index}
                  className={letter != "\n" ? "inline-block mr-0.5" : "inline"}
                  >
                  {letter}
                </motion.span>
              )
            })}
          </AnimatePresence>
      </div>
    </main>
  )
}
 

export default App
