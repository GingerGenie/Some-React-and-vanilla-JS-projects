let names = 'Марьям, Мария, Михаил, Святослав, Елизавета, Анастасия, Полина, Анна, Александра, Мия, Лев, Мирон, Марк, Степан, Злата, Герман, Тимофей, Амелия, Родион, Артемий, Ника, Даниил, Егор, Софья, Глеб, Тимур, Есения, Ульяна, Александр, Виталий, Илья, Ева, Евдокия, Алиса, Фёдор, София, Ксения, Павел, Диана, Василий, Руслан, Игорь, Владимир, Варвара, Юрий, Владислав, Максим, Матвей, Яна, Евгений, Матвей, Александр, Ярослава, Демид, Алиса, Ксения, Иван, Елизавета, Владислав, Ева, Даниил, София, Мария, Ольга, Ярослав, Денис, Георгий, Тимофей, Агата, Полина, Вероника, Анастасия, Михаил, Стефания, Константин, Дарья, Татьяна, Александра, Вера, Арина, Роберт, Амина, Ника, Данил, Зоя, Эмилия, Виктория, Марта, Анна, Василиса, Давид, Майя, Софья, Степан, Егор, Евгения, Алёна, Мирослава, Алина, Екатерина, Яна, Светлана, Артём, Антонина, Алексей, Глеб, Марат, Марк, Елисей, Кирилл, Варвара, Дмитрий, Есения, Злата, Богдан, Семён, Илья, Виктор, Юлия, Дарина, Ангелина, Милана, Валерия, Юрий, Маргарита, Максим, Мадина, Мелания, Билал, Никита, Кристина, Мирон, Сафия, Елена, Борис, Адам, Артемий, Алия, Фёдор, Артур, Пётр, Ульяна, Ясмина, Евгений, Гордей, Василий, Платон, Серафима, Вадим, Герман'
            .split(', ');
let IDnames = [];
let i = 0;

for (let name of names) {
    IDnames.push({
        name: name,
        id: i
    });
    ++i;
}
console.log(IDnames);

export {IDnames};