import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
function Card(props) {
  const [skip, setSkip] = useState(false);
  const { ref, inView, entry } = useInView({
    skip,
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      entry.target.src = entry.target.dataset.src;
      setSkip(true);
    }
  }, [inView]);

  return (
    <div className="Card text-center">
      <img data-src={props.image} ref={ref} />
      <div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
