// 일요일 목록 정의 (YYYY-MM-DD 형식)
const holidays = [
    '2024-07-07', 
    '2024-07-14', 
    '2024-07-21',  
    '2024-07-28'  
];
//토요일 목록 정의 (YYYY-MM-DD 형식)
const satday = [
    '2024-07-06',
    '2024-07-13',
    '2024-07-20',
    '2024-07-27'
];
//평일 목록 정의 (YYYY-MM-DD 형식)
const commonday = [
    '2024-07-01', '2024-07-08', '2024-07-15', '2024-07-22', '2024-07-29',
    '2024-07-02', '2024-07-09', '2024-07-16', '2024-07-23', '2024-07-30',
    '2024-07-03', '2024-07-10', '2024-07-17', '2024-07-24', '2024-07-31',
    '2024-07-04', '2024-07-11', '2024-07-18', '2024-07-25',
    '2024-07-05', '2024-07-12', '2024-07-19', '2024-07-26'
]

// 날짜 구분 함수
function checkDayType(dateString) {
    const date = new Date(dateString);
    const day = date.getDay(); // 0: 일요일, 1: 월요일, ..., 6: 토요일

    // 날짜 형식을 YYYY-MM-DD로 변환
    const formattedDate = date.toISOString().split('T')[0];

    if (day === 6) {
        return '토요일';
    } else if (day >= 1 && day <= 5) {
        return '평일';
    } else {
        return '일요일';
    }
}