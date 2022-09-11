import { CircularProgress } from "@mui/material";
import React from "react";
import Prompt, { PromptInfo } from "./Prompt";
import { Image } from "./types";

function Home() {

  const [isGenerating, setIsGenerating] = React.useState(false);
  const shouldBeGenerating = React.useRef<boolean>(false);
  const currentIndex = React.useRef<number>(0);

  const [images, setImages] = React.useState<Image[]>([]);

  const [prompt, setPrompt] = React.useState<PromptInfo>({raw: "", prompts: [], promptDimensions: []});

  const handleStart = React.useCallback(async (promptInfo: PromptInfo) => {
    setPrompt(promptInfo);
    setIsGenerating(true);
    setImages([]);
    currentIndex.current = 0;
    shouldBeGenerating.current = true;
  }, [prompt]);

  const handleStop = React.useCallback(() => {
    setIsGenerating(false);
    shouldBeGenerating.current = false;
  }, []);

  React.useEffect(() => {
    let stop = false
    const callback = () => {
      console.log("Looking! for", prompt);
      if (shouldBeGenerating.current && prompt.prompts.length && !stop) {
        const currentPrompt = prompt.prompts[currentIndex.current];
        fetch(`/api/transforms/stable-diffusion?prompt=${currentPrompt}`, {method: 'POST'})
            .then((res) => res.json())
            .then((newImage) => {
              setImages((imgs) => [...imgs, newImage]);
              currentIndex.current = (currentIndex.current + 1) % prompt.prompts.length;
              callback();
            });
      }
    };
    callback();
    return () => { stop = false; };
  }, [prompt]);
  return <>
    <Prompt
      isGenerating={isGenerating}
      onStop={handleStop}
      onStart={handleStart}/>
    { images.map((img, i) => <img key={img.src} src={img.src} alt={img.alt} />) }
    { isGenerating &&  <CircularProgress /> }
  </>
}

export default Home;