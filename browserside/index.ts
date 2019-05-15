export default function jget(toget: string) {
    const quell: string = toget;
    const requests = new XMLHttpRequest();
    requests.open("GET", quell);
    requests.addEventListener('load', (event) => {
      return requests.responseText;
    });
    requests.send();
}