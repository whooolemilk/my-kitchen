import categoryList from '../mocks/categoryList.json';

export default function Mock() {
  return (
    <div>
      <h1>カテゴリリスト</h1>
      <ul>
        {categoryList.result.map((category, i) => (
          <li key={i}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}
