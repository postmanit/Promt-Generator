
import React, { useState } from 'react';

export default function Home() {
  const [deskripsi, setDeskripsi] = useState('');
  const [suasana, setSuasana] = useState('');
  const [audio, setAudio] = useState('');
  const [angle, setAngle] = useState('');
  const [indoprompt, setIndoprompt] = useState('');
  const [engprompt, setEngprompt] = useState('');

  const handleGenerate = () => {
    const promptID = `Deskripsi: ${deskripsi}\nSuasana: ${suasana}\nAudio: ${audio}\nAngle Kamera: ${angle}`;
    const promptEN = `Description: ${deskripsi}. Cinematography & Atmosphere: ${suasana}. Audio: ${audio}. Camera Angle: ${angle}.`;
    setIndoprompt(promptID);
    setEngprompt(promptEN);
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Veo 3 Prompt Generator</h1>
      <input placeholder="Deskripsi Inti" onChange={e => setDeskripsi(e.target.value)} /><br/>
      <input placeholder="Sinematografi & Suasana" onChange={e => setSuasana(e.target.value)} /><br/>
      <input placeholder="Audio & Detail Tambahan" onChange={e => setAudio(e.target.value)} /><br/>
      <input placeholder="Angle Kamera" onChange={e => setAngle(e.target.value)} /><br/>
      <button onClick={handleGenerate}>Generate Prompt</button>
      <h3>Prompt Bahasa Indonesia</h3>
      <textarea value={indoprompt} rows={5} style={{ width: "100%" }} />
      <h3>Final English Prompt (Read-Only)</h3>
      <textarea value={engprompt} readOnly rows={5} style={{ width: "100%" }} />
    </main>
  );
}
