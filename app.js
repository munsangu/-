        //화면구성
        let body = document.createElement('h1');
        document.body.append(body);
        body.textContent = '끝말잇기';
        
        //제시단어
        let firstWord = document.createElement('div');
        firstWord.textContent = '컴퓨터';
        document.body.append(firstWord);
        let form = document.createElement('form');
        document.body.append(form);
        let input = document.createElement('input');
        form.append(input);
        let btn = document.createElement('button');
        btn.textContent = '클릭'
        form.append(btn);
        let result = document.createElement('div');
        document.body.append(result);

        //버튼 클릭이벤트
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            //제시단어.textContent의 마지막 글자 = input.value의 첫글자
            if (firstWord.textContent[firstWord.textContent.length - 1] == input.value[0]) {
                result.textContent = '딩동댕'
                firstWord.textContent = input.value;
                input.value = '';
                input.focus();
            } else {
                result.textContent = '땡'
                input.value = "";
                input.focus();
            }
        })