$(function () {
  // 変数の初期化
  let untyped = '';
  let typed = '';
  let score = 0;

  // 必要なHTML要素の取得（jQueryオブジェクト）
  const $untypedfield = $('#untyped');
  const $typedfield = $('#typed');
  const $wrap = $('#wrap');
  const $start = $('#start');
  const $count = $('#count');
  const $scoreField = $('#score');

  // 複数のテキストを格納する配列
  const textLists = [
    'Hello World','This is my App','How are you?',
    'Today is sunny','I love JavaScript!','Good morning',
    'I am Japanese','Let it be','Samurai',
    'Typing Game','Information Technology',
    'I want to be a programmer','What day is today?',
    'I want to build a web app','Nice to meet you',
    'Chrome Firefox Edge Safari','machine learning',
    'Brendan Eich','John Resig','React Vue Angular',
    'Netscape Communications','undefined null NaN',
    'Thank you very much','Google Apple Facebook Amazon',
    'ECMAScript','console.log','for while if switch',
    'var let const','Windows Mac Linux iOS Android',
    'programming'
  ];

  // ランダムのテキストを表示
  const createText = () => {
    // 正タイプした文字列をクリア
    typed = '';
    $typedfield.text(typed);

    // 配列のインデックス数からランダムな数値を生成する
    const random = Math.floor(Math.random() * textLists.length);

    // 配列からランダムなテキストを取得し画面に表示する
    untyped = textLists[random];
    $untypedfield.text(untyped);
  };

  // キー入力の判定（jQueryイベント用に、関数として保持）
  const keyPress = (e) => {
    // 誤タイプの場合
    if (e.key !== untyped.substring(0, 1)) {
      $wrap.addClass('mistyped');
      setTimeout(() => {
        $wrap.removeClass('mistyped');
      }, 100);
      return;
    }

    // 正タイプの場合
    score++;
    $wrap.removeClass('mistyped');
    $scoreField.text(score);

    typed += untyped.substring(0, 1);
    untyped = untyped.substring(1);

    $typedfield.text(typed);
    $untypedfield.text(untyped);

    // テキストがなくなったら新しいテキストを表示
    if (untyped === '') {
      createText();
    }
  };

  // タイピングスキルのランクを判定
  const rankCheck = (score) => {
    let text = '';

    if (score < 10) {
      text = `あなたのランクはcです。\nBランクまであと${100 - score}文字です。`;
    } else if (score < 200) {
      text = `あなたのランクはBです。\nAランクまであと${200 - score}文字です。`;
    } else if (score < 300) {
      text = `あなたのランクはAです。\nSランクまであと${300 - score}文字です。`;
    } else {
      text = `あなたのランクはSです。\nおめでとうございます!`;
    }

    return `${score}文字打てました!\n${text}\n 【OK】リトライ / 【キャンセル】終了`;
  };

  // ゲームの終了
  const gameOver = (id) => {
    clearInterval(id);

    const result = confirm(rankCheck(score));

    // 「OK」ボタンが押されたら画面をリロードする
    if (result === true) {
      window.location.reload();
    }
  };

  // カウントダウンタイマー
  const timer = () => {
    // 文字列 → 数値にしておくと安全
    let time = Number($count.text());

    const id = setInterval(() => {
      time--;
      $count.text(time);

      // カウントが0になったらタイマーを停止する
      if (time <= 0) {
        clearInterval(id);

        // 入力を止める（jQueryで解除）
        $(document).off('keypress', keyPress);

        // グレーの領域に「タイムアップ！」と表示する
        $typedfield.text('');
        $untypedfield.text('タイムアップ！');

        // 10ms後に判定のダイアログを表示する
        setTimeout(() => {
          gameOver(id);
        }, 10);
      }
    }, 1000);
  };

  // ゲームスタート時の処理（1回だけ動かすと事故りにくい）
  $start.on('click', function () {
    // スコアを初期化する
    score = 0;
    $scoreField.text(score);

    // カウントダウンタイマーを開始する
    timer();

    // ランダムなテキストを表示する
    createText();

    // 「スタート」ボタンを非表示にする
    $start.hide();

    // キーボードのイベント処理（jQueryで登録）
    $(document).on('keypress', keyPress);
  });

  // 初期表示
  $untypedfield.text('スタートボタンで開始');
});