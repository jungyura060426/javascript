// documnet -> html 분석 파일을 가져옴
document.write("js를 시작했어요");

// 1. js 대소문자 구분
// 날짜 객체
new Date();
// New date(); <- 에러

// 2. 코드 한 줄 작성 후 세미클론
document.write("hi");
document.write("bye");

// 3. 큰 따음표 작은따음표 겹침 주의
// 앞에 백슬래쉬 붙여주거나 작음따음표 적기
document.write("선생님이'필기를 해'라고 말씀하셨다");

// 변수 선언
var age1 = 18; // <- 이제 사용하지 말자

// es6(ECMA2015)
// 변수 -> 재할당(수정) 가능/불가능

// constant : 상수, 수정 절대 불가능
// 생성과 동시에 할당 필수
const age2 = 18;
// age2 = 23; (에러 발생, 재활당 불가능한데 했음)

// let: 수정 및 재활당 자유로움
let age3 = 18;
age3 = "20살부터 성인";
console.log(age3); // 브라우저의 Console 영역에 문자열 출력

// JS에서 사용하는 자료형
// 1. 문자형 -> String
let firstname = "정"

// 문자열 데이터에 HTML 태그를 포함하여 출력 시. 태그를 잘 인식
let lastname = "<h1>유라</h1>";

// 2. 숫자형 -> Number
let age4 = 18;
// (숫자만 있는) 문자열 데이터 -> Number 자료형으로 변환
let age5 = Number("18");

// 문자열 데이터 -> Number 자료형으로 강제 변환 -> Not a Number(NaN)으로 변환
let age6 = Number("18살");

// 3. 논리형 -> Boolean (true/false)
let isLoginded = true;
isLoginded = false;

let check = Boolean(""); // truthy, falsy의 개념이 존재한다
// 엥간해서는 값이 들어있다 -> true 형변환
// null,0,undefined,"",NaN, ... -> false 형변환

// 4. 빈 데이터 (null, undefined)
let tmp; // undefined : 변수에 값을 등록하기 전 상태 (의도 X)
let tmp2 = null; // null : 변수에 저장된 데이터를 비울 때 (의도 O)

// 자료형이 뭔데? => typeof
// string, number, boolean -> typeof 출력시 본인 자료형 그대로
// typeof NaN -> Number
// typeof null -> object (객체) (null이라는 이름의 자료형 X)

// 변수 선언 시 주의사항
let $num1, _num2, num3;
