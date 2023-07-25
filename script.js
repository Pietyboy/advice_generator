async function get_advice(){
    const id_container = document.getElementById('advice_id');
    const advice_container = document.getElementById('advice_text');

    id_container.innerHTML = " ";
    advice_container.innerHTML = '';

    const advice_url = await fetch('https://api.adviceslip.com/advice');
    const text_advice = await advice_url.json();

    id_container.innerHTML = parseInt(Object.values(text_advice.slip));
    advice_container.innerHTML = Object.values(text_advice.slip.advice).join('');
}