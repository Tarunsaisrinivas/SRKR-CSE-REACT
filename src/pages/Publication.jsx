import React, { useState } from 'react';
import publications from '../data/Publications';



const Publication = () => {
  const [showContent, setShowContent] = useState(false);

  const handleOpen = () => {
    setShowContent(!showContent);
  };

  return (
    <>
      <div>
        <p
          className={`inline-block p-1 border border-black cursor-pointer ${showContent ? 'bg-black text-white' : 'focus:bg-black focus:text-white'}`}
          onClick={handleOpen}
        >
          2021-2022
        </p>
        {showContent && (
          <div className="mt-4 ">
            <table className="w-[90vw] m-auto border border-collapse border-black table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 border border-black">S.NO</th>
                  <th className="px-4 py-2 border border-black">TITLE OF PAPER</th>
                  <th className="px-4 py-2 border border-black">NAME OF AUTHOR/S</th>
                  <th className="px-4 py-2 border border-black">NAME OF JOURNAL</th>
                  <th className="px-4 py-2 border border-black">VOLUME</th>
                </tr>
              </thead>
              <tbody>
                {publications.map((publication) => (
                  <tr key={publication.id}>
                    <td className="px-4 py-2 border border-black">{publication.id}</td>
                    <td className="px-4 py-2 border border-black">{publication.title}</td>
                    <td className="px-4 py-2 border border-black">{publication.author}</td>
                    <td className="px-4 py-2 border border-black">{publication.journal}</td>
                    <td className="px-4 py-2 border border-black">{publication.volume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Publication;
