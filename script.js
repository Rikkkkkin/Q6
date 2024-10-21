document.getElementById('questionnaire-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fruit = document.querySelector('input[name="fruit"]:checked')?.value || "未選択";
    const vegetables = document.querySelector('input[name="vegetables"]:checked')?.value || "未選択";
    const whole_grains = document.querySelector('input[name="whole_grains"]:checked')?.value || "未選択";

    console.log("果物:", fruit);
    console.log("野菜:", vegetables);
    console.log("全粒穀物:", whole_grains);

    alert("アンケートを送信しました。ご協力ありがとうございます。");
});
