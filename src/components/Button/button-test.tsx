import { Button } from "./button";

export const ButtonTest = () => {
  return (
    <>
      <Button
        type={"primary"}
        size='middle'
        onClick={(e) => {
          console.log("嘿嘿嘿");
        }}
      >
        点我
      </Button>
      <Button type={"danger"} size="small">
        点我
      </Button>
      <Button type={"default"}>default</Button>
      <Button type={"default"} disabled>
        disabled
      </Button>
      <Button type={"link"} href="https://www.baidu.com" >
        link
      </Button>
    </>
  );
};
