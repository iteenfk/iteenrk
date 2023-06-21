        "use strict"
        
        // 音量スライダーの要素を取得
        const volumeSlider = document.getElementById("slider");

        // 音量値表示用の要素を取得
        const volumeValue = document.getElementById("out");

        // オーディオ要素を取得
        const audio = document.getElementById("player");

        // 音量スライダーの値が変更された時の処理
        function volume() {
            const value = volumeSlider.value;
            volumeValue.textContent = value + "%";

            // 音量を設定
            audio.volume = value / 100;
        }

        // 音楽再生ボタンのクリック処理
        function play() {
            audio.play();
        }

        // 音楽一時停止ボタンのクリック処理
        function pause() {
            audio.pause();
        }

        function stop() {
            audio.pause();
            audio.currentTime = 0;
            }
