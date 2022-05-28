import Head from "next/head";
import { useRouter } from "next/router";
import { Avatar, Button, Card, Col, Input, Row } from "ui";
import { withUserLayout } from "../../components/Layout";
import styles from "../../styles/Home.module.css";

export default withUserLayout(() => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Users profile home</title>
        <meta name="description" content="User schedule dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Row
          gutter={[8, 16]}
          style={{
            width: "100%",
            marginLeft: 0,
            marginRight: 0,
            padding: "0 0 40px 0",
            // padding: 0,
            overflowY: "scroll",
          }}
        >
          <Col
            xs={{ span: 18 }}
            lg={{ span: 12 }}
            style={{
              display: "flex",
              flexFlow: "column",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <h2 style={{ margin: 0 }}>Hi Uba</h2>
            <span>Glad to have you back</span>
          </Col>
          <Col
            xs={{ span: 6 }}
            lg={{ span: 12 }}
            style={{
              display: "flex",
              flexFlow: "column",
              alignItems: "end",
              justifyContent: "center",
            }}
          >
            <Avatar src="/icon-384x384.png" shape="circle" size="100%" />
          </Col>
          <Col span={24}>
            <Card style={{ borderRadius: 5 }}>
              <h3 style={{ margin: 0, fontWeight: "bold" }}>
                No Pickup Scheduled
              </h3>
              <br />
              <span>
                Looks like you don’t have a pick up scheduled. Schedule one now
              </span>
              <br />
              <br />
              <Button
                className={styles.normal_btn}
                size="large"
                onClick={() => router.push("/home/scheduler")}
              >
                Schedule Pick Up
              </Button>
            </Card>
          </Col>
          <Col
            span={24}
            style={{
              display: "flex",
              flexFlow: "column",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <h4 style={{ margin: 0, fontWeight: "bold" }}>One & Done</h4>
            <span>Select your next pickup date</span>
          </Col>
          <Col span={8}>
            <Card style={{ borderRadius: 5 }} hoverable>
              <span>Oct</span>
              <br />
              <h3 style={{ margin: 0, fontWeight: "bold" }}>28</h3>
              <span>2021</span>
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ borderRadius: 5 }} hoverable>
              <span>Oct</span>
              <br />
              <h3 style={{ margin: 0, fontWeight: "bold" }}>29</h3>
              <span>2021</span>
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ borderRadius: 5 }} hoverable>
              <span>Oct</span>
              <br />
              <h3 style={{ margin: 0, fontWeight: "bold" }}>30</h3>
              <span>2021</span>
            </Card>
          </Col>
          <Col span={24}>
            <Card
              title={<h4 style={{ margin: 0, textAlign: "left" }}>Wallet</h4>}
              extra={
                <div
                  style={{
                    display: "flex",
                    flexFlow: "column",
                    alignItems: "end",
                    justifyContent: "center",
                  }}
                >
                  <h3 style={{ margin: 0 }}>N0.00</h3>
                  <span style={{ fontSize: ".8rem", color: "rgba(0,0,0,.45)" }}>
                    Credit Balance
                  </span>
                </div>
              }
              style={{ borderRadius: 5 }}
            >
              {/* <span>Oct</span>
              <br />
              <h3 style={{ margin: 0, fontWeight: "bold" }}>28</h3>
              <span>2021</span> */}
              <h3 style={{ textAlign: "left" }}>Have a promo code</h3>
              <Input
                // size="default"
                suffix={<Button className={styles.normal_btn}>Apply</Button>}
                className={styles.textfield_rounded}
                placeholder="Enter promo code"
              />
            </Card>
          </Col>
        </Row>
      </main>
    </div>
  );
});
