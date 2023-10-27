import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    start();
  }
}

async function start() {
  const CARS = await MissionUtils.Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  const CAR_ARRAY = CARS.split(",");
  CAR_ARRAY.forEach((car) => {
    checkCarName(car);
  });
  const ATTEMPS_COUNT = await MissionUtils.Console.readLineAsync(
    "시도할 횟수는 몇 회인가요?\n"
  );
  checkAttempsCount(ATTEMPS_COUNT);

  for (let i = 0; i < ATTEMPS_COUNT; i++) {
    const RANDOMNUMBER = MissionUtils.Random.pickNumberInRange(0, 9);
    console.log(RANDOMNUMBER);
    if (RANDOMNUMBER >= 4) {
      console.log("전진");
    }
  }
  MissionUtils.Console.print(CAR_ARRAY);
  MissionUtils.Console.print(ATTEMPS_COUNT);
}

function checkCarName(car) {
  if (car.length > 5 || car.length === 0) {
    throw new Error("[ERROR] 차량 이름 입력이 잘못됨.");
  }
}

function checkAttempsCount(attemps) {
  if (isNaN(attemps)) {
    throw new Error("[ERROR] 횟수 입력이 잘못됨.");
  }
}

export default App;