import logo from "../assets/logo.png";

const shareKakao = (result) => {
  if (!window.Kakao) {
    alert("sdk 오류");
    return;
  }

  if (window.Kakao && !window.Kakao.isInitialized()) {
    window.Kakao.init(import.meta.env.VITE_KAKAO_KEY);
  }

  window.Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: `나의 MBTI 테스트 결과: ${result.result}`,
      description: "나의 성격 유형을 확인해보세요!",
      imageUrl: logo,
      link: {
        mobileWebUrl: window.location.href,
        webUrl: window.location.href,
      },
    },
    buttons: [
      {
        title: "테스트 하러 가기",
        link: {
          mobileWebUrl: window.location.origin,
          webUrl: window.location.origin,
        },
      },
    ],
  });
};

export default shareKakao;
