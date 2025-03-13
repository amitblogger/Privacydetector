* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background: linear-gradient(135deg, #1e3c72, #2a5298);
    color: #fff;
    line-height: 1.6;
    padding: 30px;
    min-height: 100vh;
    overflow-x: hidden;
}

.tool-container {
    max-width: 1000px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.98);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    position: relative;
    overflow: hidden;
}

h1 {
    font-size: 2.8rem;
    font-weight: 700;
    color: #fff;
    text-align: center;
    margin-bottom: 15px;
    background: linear-gradient(90deg, #16a085, #3498db);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: fadeIn 1s ease;
}

.input-section {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin: 30px 0;
    position: relative;
    z-index: 1;
}

#urlInput {
    padding: 15px;
    font-size: 1.2rem;
    width: 100%;
    max-width: 500px;
    border: none;
    border-radius: 30px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

#urlInput:focus {
    transform: scale(1.03);
    box-shadow: 0 8px 20px rgba(22, 160, 133, 0.4);
    outline: none;
}

#scanButton {
    padding: 15px 40px;
    font-size: 1.2rem;
    font-weight: 600;
    background: linear-gradient(135deg, #16a085, #1abc9c);
    color: #fff;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

#scanButton:hover {
    background: linear-gradient(135deg, #128c7e, #16a085);
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(22, 160, 133, 0.5);
}

.results {
    display: none;
    margin-top: 30px;
    animation: slideUp 0.5s ease-in-out;
}

.score-container {
    text-align: center;
    margin-bottom: 30px;
    position: relative;
}

.score-circle {
    width: 120px;
    height: 120px;
    line-height: 120px;
    font-size: 2.5rem;
    font-weight: 700;
    color: #fff;
    border-radius: 50%;
    margin: 0 auto;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    transition: transform 0.5s ease, background 0.5s ease;
}

.score-circle:hover {
    transform: scale(1.1);
}

.score-label {
    margin-top: 15px;
    font-size: 1.3rem;
    font-weight: 600;
    color: #2c3e50;
    text-transform: uppercase;
}

h2 {
    font-size: 2rem;
    color: #16a085;
    margin: 25px 0 15px;
    background: linear-gradient(90deg, #16a085, #3498db);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.summary, .analysis, .actions {
    padding: 20px;
    background: linear-gradient(135deg, #f9f9f9, #ecf0f1);
    border-radius: 15px;
    margin: 20px 0;
    color: #333;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.tracker-list {
    padding: 20px;
    background: #ffffff;
    border-radius: 15px;
    margin: 20px 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.tracker-item {
    margin: 15px 0;
    padding: 15px;
    background: #f1f3f5;
    border-radius: 10px;
    color: #333;
    transition: transform 0.3s ease;
}

.tracker-item:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.tracker-item strong {
    color: #e74c3c;
    font-weight: 600;
}

.tracker-item p {
    margin: 5px 0;
    font-size: 1rem;
}

.tracker-item .data-type { color: #2980b9; }
.tracker-item .use-case { color: #8e44ad; }
.tracker-item .risk-score { color: #e74c3c; }
.tracker-item .solution { color: #16a085; }

.risk-bar {
    width: 100%;
    height: 25px;
    background: #ddd;
    border-radius: 12px;
    overflow: hidden;
    margin: 15px 0;
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
}

.risk-fill {
    height: 100%;
    transition: width 0.7s ease;
}

#riskDesc {
    font-size: 1rem;
    color: #666;
    text-align: center;
}

ol {
    padding-left: 25px;
    color: #333;
    font-size: 1.1rem;
}

ol li {
    margin: 10px 0;
}

.highlight {
    color: #e74c3c;
    font-weight: 600;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
    .tool-container { padding: 25px; }
    h1 { font-size: 2.2rem; }
    .input-section { flex-direction: column; align-items: center; }
    #urlInput, #scanButton { max-width: 100%; }
    .score-circle { width: 100px; height: 100px; line-height: 100px; font-size: 2rem; }
    h2 { font-size: 1.6rem; }
    .tracker-item { padding: 10px; }
}
