export default class Mathf
{
	static Clamp(value, min, max){
			return Math.max( min, Math.min(value, max) )
		}
	static Lerp(a, b, t) {
		return (1 - t) * a + t * b;
	}
	static LerpRotation(a,b,t) {
		let delta = b-a;
		if(Math.abs(delta) > 180){ // offseting the angles by 180, this way the breakpoint happens in a different place and they can be safely lerped
			a = Mathf.WrapAngle(a+180);
			b = Mathf.WrapAngle(b+180);
			return Mathf.WrapAngle(Mathf.Lerp(a,b,t) - 180);
		}
		return Mathf.Lerp(a,b,t);
	}
	static TransformRange(OldMin, OldMax,NewMin,NewMax, value){
		let OldRange = (OldMax - OldMin);
		let NewRange = (NewMax - NewMin);
		return (((value - OldMin) * NewRange) / OldRange) + NewMin;
	}
	static Deg2Rad(deg){
		return deg * (Math.PI/180);
	}
	static Rad2Deg(rad){
		return rad * (180/Math.PI);
	}
	static WrapAngle(angle){
		if (angle > 180)        { angle -= 360; }
		else if (angle <= -180) { angle += 360; }

		return angle;
	}
}
