# EXP 테이블 생성
create table EXP (
	num integer not null,
    src varchar(50),
    exp varchar(200) NOT NULL,
    picture varchar(200),
    primary key (num)
);

# MEME 테이블 생성
create table MEME (
	word varchar(20) not null,
    num integer not null,
    primary key (word),
    foreign key (num) references EXP (num)
);
    
# EXP 테이블에 임시 데이터 삽입
insert into EXP values(1, 'src-1', 'exp-1', 'pic-1');
insert into EXP values(2, 'src-2', 'exp-2', 'pic-2');
insert into EXP values(3, 'src-3', 'exp-3', 'pic-3');

# MEME 테이블에 임시 데이터 삽입
insert into MEME values('word-1', 1);
insert into MEME values('word-2', 2);
insert into MEME values('word-3', 3);
insert into MEME values('word-4', 1);

# 데이터가 정상적으로 추가됐는지 확인
select * from EXP;
select * from MEME;
select * from meme where word='word-1';