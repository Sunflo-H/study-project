const kakaoBookURL = "https://dapi.kakao.com/v3/search/book?target=title"+'&query=1';
const option = {
  headers: {
    Authorization: "KakaoAK bbbe7d040459540b61c1f31e91280f78"
  }
}
fetch(kakaoBookURL,option)
  .then(response => response.json())
  .then(json => console.log(json));