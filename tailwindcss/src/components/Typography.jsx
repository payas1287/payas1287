import React from "react";

const Typography = () => {
  return <div>

    <p className="text-center text-red-500 text-sm">TYPOGRAPHY</p>
    <p className="text-center text-red-500 text-base">TYPOGRAPHY</p>
    <p className="text-center text-red-500 text-lg">TYPOGRAPHY</p>
    <p className="text-center text-red-500 text-xl">TYPOGRAPHY</p>
    <p className="text-center text-red-500 text-2xl">TYPOGRAPHY</p>
    <p className="text-center text-red-500 text-3xl">TYPOGRAPHY</p>
    <p className="text-center text-red-500 text-4xl">TYPOGRAPHY</p>
    <h1 className="text-center text-red-500 text-5xl">TYPOGRAPHY</h1>
    <h1 className="text-center text-red-500 text-[3.5rem]">TYPOGRAPHY</h1>

    Line Clamp
    <article>
        <p className="line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur odit alias aut minus ducimus quisquam repellendus, iusto quis quae fuga rem omnis natus sunt quasi unde quibusdam quos? Dignissimos consequuntur corporis blanditiis mollitia itaque accusantium, illo id, alias, vero recusandae nisi quo atque iure facilis.
        </p>
    </article>
    <p className="font-bold text-center underline">Merhaba</p>
    <p className="font-bold text-center line-through">Merhaba</p>
    <p className="font-bold text-center uppercase">Merhaba</p>
    <p className="font-bold text-center lowercase">Merhaba</p>
    <p className="font-bold text-center text-[#7EACB5] bg-blue-200">Merhaba</p>

  </div>;
};

export default Typography;
