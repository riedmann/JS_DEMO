import Card from "./components/Card";

export default function Home() {
  console.log("hello");

  return (
    <div className="">
      <Card
        title={"Super"}
        description={"fbja dfas jdkfasl "}
        isActive={true}
      />
      <Card
        title={"Super"}
        description={"fbja dfas jdkfasl "}
        isActive={false}
      />
    </div>
  );
}
