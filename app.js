const quiz = [
    {
        question: 'コンピューターの５大装置のうち、制御と演算を行う装置は？',
        answers: [
            '入力装置',
            '出力装置',
            'CPU',
            'メモリ'
        ],
        correct: 'CPU'
    }, {
        question: '揮発性でデータの読み書きが可能な主記憶装置の分類は？',
        answers: [
            'HDD',
            'DRAM',
            'SRAM',
            'ROM'
        ],
        correct: 'DRAM'
    }, {
        question: 'HDDへの書き消しの繰り返しによりデータが断片化、虫食い状態となり空き容量が有効に使えなくなることを何という？',
        answers: [
            'フラグメンテーション',
            'RAID',
            'ストライピング',
            'ミラーリング'
        ],
        correct: 'フラグメンテーション'
    }, {
        question: '主に固定電話の回線で使われる接続方法で、機器の回線が1本でも複数の宛先につなげられるよう回線交換機を利用して機器同士を接続する方法は？',
        answers: [
            '接続切替方式',
            '占有利用方式',
            '1on1方式',
            '回線交換方式'
        ],
        correct: '回線交換方式'
    }, {
        question: 'コンピューターネットワークでは同時に複数の接続先とデータの送受信ができる通信方式は？',
        answers: [
            'パケット通信方式',
            'パケット交換方式',
            'データ分割通信方式',
            'ルーター制御方式'
        ],
        correct: 'パケット交換方式'
    }, {
        question: 'TCP/IP モデルのアプリケーション層の接続機器で、規格の異なるネットワークを中継する機器は？',
        answers: [
            'HTTP',
            'ハブ',
            'ゲートウェイ',
            'DNS'
        ],
        correct: 'ゲートウェイ'
    }, {
        question: 'TCP/IP モデルのトランスポート層のプロトコルで、信頼性は低いが低コストで通信できるものは？',
        answers: [
            'TCP',
            'UDP',
            'IP',
            'FTP'
        ],
        correct: 'UDP'
    }, {
        question: 'AIにおいて、学習データを与えてコンピューター自身が将来を予測できるようになる技術を何という？',
        answers: [
            'ディープラーニング',
            'ライブラーニング',
            'AI学習',
            '機械学習'
        ],
        correct: '機械学習'
    }, {
        question: 'AIにおいて、機械学習ではできなかった複雑なデータが扱える、より緻密なデータ分類をする技術は？',
        answers: [
            'ディープラーニング',
            '強化学習',
            '音声認識',
            '自然言語処理'
        ],
        correct: 'ディープラーニング'
    }, {
        question: '先入れ・先出し（FIFO）で、入ったデータの順に出ていく構造を何という？',
        answers: [
            'Enqueue',
            'Queue',
            'POP',
            'Stack'
        ],
        correct: 'Queue'
    }, {
        question: '後入れ・先出し（LIFO）で、後から入ったデータが先に出る構造を何という？',
        answers: [
            'Enqueue',
            'PUSH',
            'Stack',
            'Queue'
        ],
        correct: 'Stack'
    }, {
        question: '隣り合う2つのデータを比較・交換して整列するアルゴリズムは？',
        answers: [
            '選択ソート（選択法）',
            'バブルソート（交換法）',
            'ヒープソート',
            'マージソート'
        ],
        correct: 'バブルソート（交換法）'
    }, {
        question: '昇順に整列させるときは最小値、降順に整列させるときは最大値を取り出して整列するアルゴリズムは？',
        answers: [
            '挿入ソート（挿入法）',
            'ヒープソート',
            'クイックソート',
            '選択ソート（選択法）'
        ],
        correct: '選択ソート（選択法）'
    }, {
        question: '未整列のデータを整列済みのデータへ1つずつ移行するアルゴリズムは？',
        answers: [
            '挿入ソート（挿入法）',
            'マージソート',
            'クイックソート',
            'バブルソート（交換法）'
        ],
        correct: '挿入ソート（挿入法）'
    }, {
        question: '配列を繰り返し2分割し、要素が1つになるまで細分化して値を比較して並べ替えるアルゴリズムは？',
        answers: [
            'ヒープソート',
            'マージソート',
            'バブルソート（交換法）',
            '選択ソート（選択法）'
        ],
        correct: 'マージソート'
    }, {
        question: '未整列の配列から基準値を決めて大きい値と小さい値にグループ分けし、繰り返すアルゴリズムは？',
        answers: [
            'ヒープソート',
            'バブルソート（交換法）',
            '挿入ソート（挿入法）',
            'クイックソート'
        ],
        correct: 'クイックソート'
    }, {
        question: '未整列の配列を木構造として扱うアルゴリズムは？',
        answers: [
            '選択ソート（選択法）',
            '挿入ソート（挿入法）',
            'ヒープソート',
            'マージソート'
        ],
        correct: 'ヒープソート'
    }, {
        question: 'ISMSの3要素で、許可された人だけが情報を利用できるようにアクセスを制限する状態のことを何という？',
        answers: [
            '機密性',
            '完全性',
            '可用性',
            '信頼性'
        ],
        correct: '機密性'
    }, {
        question: 'ISMSの3要素で、情報が書き換えられない正確な状態を保つことを何という？',
        answers: [
            '真正性',
            '機密性',
            '否認防止',
            '完全性'
        ],
        correct: '完全性'
    }, {
        question: 'ISMSの3要素で、必要な時に情報を取得したりシステムを正しく稼働することを何という？',
        answers: [
            '完全性',
            '可用性',
            '信頼性',
            '責任追跡性'
        ],
        correct: '可用性'
    }, {
        question: 'ISMSで、押印・署名などを用いて利用者や情報の内容が本物であることを明確にすることを何という？',
        answers: [
            '信頼性',
            '責任追跡性',
            '真正性',
            '完全性'
        ],
        correct: '真正性'
    }, {
        question: 'ISMSで、情報処理が欠陥や不具合なく正しく処理されることを何という？',
        answers: [
            '否認防止',
            '完全性',
            '可用性',
            '信頼性'
        ],
        correct: '信頼性'
    }, {
        question: 'ISMSで、編集・更新のデータログで誰が行ったのかを明確にすることを何という？',
        answers: [
            '機密性',
            '責任追跡性',
            '真正性',
            '否認防止'
        ],
        correct: '責任追跡性'
    }, {
        question: 'ISMSで、データログをとるなどして情報作成の事実を後から否認できないようにすることを何という？',
        answers: [
            '否認防止',
            '責任追跡性',
            '信頼性',
            '完全性'
        ],
        correct: '否認防止'
    }, {
        question: 'システムが故障しても機能を停止したり制限することなくシステムを動作させる考え方を何という？',
        answers: [
            'フォールトアボイダンス',
            'フェールソフト',
            'フォールトトレランス',
            'フェールセーフ'
        ],
        correct: 'フォールトトレランス'
    }, {
        question: 'システムが故障したとき機能を制限することで稼働を優先する設計のことを何という？',
        answers: [
            'フェールセーフ',
            'フールプルーフ',
            'フォールトトレランス',
            'フェールソフト'
        ],
        correct: 'フェールソフト'
    }, {
        question: 'システムが故障したとき安全を優先するためにシステムを止める設計のことを何という？',
        answers: [
            'フェールセーフ',
            'フェールソフト',
            'フォールトアボイダンス',
            'フールプルーフ'
        ],
        correct: 'フェールセーフ'
    }, {
        question: '人間が誤った使い方をしてもシステム制御して異常が起こらないようにする設計のことを何という？',
        answers: [
            'フールプルーフ',
            'フォールトトレランス',
            'フェールセーフ',
            'フェールソフト'
        ],
        correct: 'フールプルーフ'
    }, {
        question: '不具合や故障が起きないようにする信頼性設計の考え方のことを何という？',
        answers: [
            'フェールソフト',
            'フールプルーフ',
            'フォールトアボイダンス',
            'フォールトトレランス'
        ],
        correct: 'フォールトアボイダンス'
    }, {
        question: '消費者が商品を購入するまでの心理プロセスを表したものを何という？',
        answers: [
            'マーケティングファネル',
            'ロングテール',
            'コンバージョンレート',
            'アトリビューション'
        ],
        correct: 'マーケティングファネル'
    }, {
        question: '売れる機会の少ない商品も商品数を幅広く揃えることで顧客層数を増やし、売り上げ全体を大きくする考え方を何という？',
        answers: [
            'マーケットイン',
            'コンテンツマーケティング',
            'ロングテール',
            '行動ターゲティング'
        ],
        correct: 'ロングテール'
    }, {
        question: '1か月間でサイトにアクセスしたユニークユーザー数は？',
        answers: [
            'UU',
            'MAU',
            'PV',
            'LTV'
        ],
        correct: 'MAU'
    }, {
        question: 'Webサイトにアクセスした数のうち、成果に結びついた数の割合のことを何という？',
        answers: [
            'オプトアウト',
            'スコアリング',
            'ホリスティック・アプローチ',
            'コンバージョンレート'
        ],
        correct: 'コンバージョンレート'
    }
];

// プログレスバー
const progress = document.getElementById('progress-bar');
const quizLength = quiz.length;
let quizIndex = 0;

// クイズ
let score = 0;
const $btn = document.getElementsByClassName('btn-success');
const btnLength = $btn.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').innerHTML = '問' + (quizIndex + 1) + '<br>' + quiz[quizIndex].question;
    for (let btnIndex = 0; btnIndex < btnLength; btnIndex++) {
        $btn[btnIndex].textContent = quiz[quizIndex].answers[btnIndex];
    }
}

setupQuiz();

// 選択されたら正誤判定する関数
const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解！');
        score++;
    } else {
        window.alert('不正解！');
    }

    quizIndex++;
    // プログレスバーの値を変更
    let quizValue = Math.round((quizIndex / quizLength) * 100);
    progress.value = quizValue;

    if (quizIndex < quizLength) {
        // 次の問題を作成
        setupQuiz();
    } else {
        // 終了・スコアの表示
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
};

// 各ボタンに関数を呼び出す
for (let handlerIndex = 0; handlerIndex < btnLength; handlerIndex++) {
    $btn[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
}