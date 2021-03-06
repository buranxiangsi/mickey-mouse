const string =`

.mouse-head{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background: black;
  border-radius: 50%;
}
.ear-left{
  width: 63%;
  height: 63%;
  margin-top: -50px;
  margin-left: -80px;
  background: black;
  border-radius: 50%;
}
.ear-right{
  width: 63%;
  height: 63%;
  margin-left: 161px;
  margin-top: -126px;
  background: black;
  border-radius: 50%;

}
.mouse-face{
  position: relative;

}
.left-top{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)rotate(68deg);
  background: #f8dbc6;
  width: 85px;
  height: 104px;
  border-radius: 102% 0 0 100% / 50%;
  margin-top: 70px;
  margin-left: -20px;

}

.right-top {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(117deg);
  background: #f8dbc6;
  width: 85px;
  height: 104px;
  border-radius: 102% 0 0 100% / 50%;
  margin-top: 70px;
  margin-left: 20px;
}
.face-bottom{
  position: absolute;
  width: 140px;
  height: 90px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 153px;
  background: #f8dbc6;
}
.left-bottom{
  position: absolute;
  width: 82px;
  height: 90px;
  background: #f8dbc6;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(24deg);
  margin-top: 138px;
  margin-left: -47px;
  border-radius: 100% 0 0 100% / 50%;
}
.right-bottom{
  position: absolute;
  width: 82px;
  height: 90px;
  background: #f8dbc6;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(156deg);
  margin-top: 138px;
  margin-left: 47px;
  border-radius: 100% 0 0 100% / 50%;

}
.eye-left{
  position: absolute;
  width: 30px;
  height: 70px;
  border: 2px solid black;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-4deg);
  margin-top: 83px;
  margin-left: -15px;
  border-radius: 50%;
  z-index: 21;
}
.eye-left::after{
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: 7px;
  margin-top: 10px;
  border-radius: 50%;
  width: 13px;
  height: 35px;
  background: black;

}
.eye-right::after{
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: -7px;
  margin-top: 10px;
  border-radius: 50%;
  width: 13px;
  height: 35px;
  background: black;

}
.eye-right{
  position: absolute;
  width: 30px;
  height: 70px;
  border: 2px solid black;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(2deg);
  margin-top: 83px;
  margin-left: 17px;
  border-radius: 50%;
  z-index: 21;
}

.eye-bottom{
   width: 70px;
   height: 30px;
   position: absolute;
   top: 50%;
   left: 50%;
   border-radius: 50%;
   background: #f8dbc6;
   transform: translate(-50%, -50%);
   border-top: 2px solid black;
   margin-top: 114px;
   z-index: 23;
 }
.mouse-nose{
  position: absolute;
  width: 50px;
  height: 30px;
  top: 50%;
  left: 50%;
  margin-top: 109px;
  margin-left: -25px;
  border-radius: 50%;
  background: black;
  z-index: 100;
}

.mouth-top{
  width: 140px;
  height: 70px;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: #f8dbc6;
  border-bottom: 2px solid black;
  margin-top: 128px;
  z-index: 20;
}
.mouse-mouth{
  position: relative;
  width: 100%;
  height: 100%;
}
.mouse-mouth> .mouth-left{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%) rotate(-21deg);
  width: 26px;
  height: 12px;
  border-top: 2px solid black;
  margin-top: 135px;
  z-index: 50;
  border-radius: 50%;
  margin-left: -69px;

}
.mouse-mouth> .mouth-right{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%) rotate(39deg);
  width: 26px;
  height: 12px;
  border-top: 2px solid black;
  margin-top: 135px;
  z-index: 50;
  border-radius: 50%;
  margin-left: 67px;

}
.mouth-bottom{
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 44px;
  margin-top:160px;
  border-radius: 50%;
  border: 2px solid black;
  z-index: 14;
  background: black;
  overflow: hidden;
}

.tongue-left{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(10deg);
  width: 55px;
  height: 30px;
  border: 3px solid #000;
  margin-top: 22px;
  margin-left: -11px;
  border-radius: 50%;
  background: red;
}
.tongue-right{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(182deg);
  width: 48px;
  height: 18px;
  margin-top: 19px;
  border-right: 2px solid #000;
  margin-left: 21px;
  border-radius: 50%;
  background: red;
}

.face-bottom{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 61px;
  height: 61px;
  margin-top: 183px;
  border-radius: 50%;
  background:#f8dbc6;
  border-bottom: 2px solid black;
  z-index: 5;
}

`

export default string