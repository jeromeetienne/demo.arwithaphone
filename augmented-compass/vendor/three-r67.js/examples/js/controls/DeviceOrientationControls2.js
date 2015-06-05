/**
 * @author richt / http://richt.me
 * @author WestLangley / http://github.com/WestLangley
 *
 * W3C Device Orientation control (http://w3c.github.io/deviceorientation/spec-source-orientation.html)
 */

THREE.DeviceOrientationControls2 = function ( object, camera) {

	var scope = this;

	this.object = object;
	this.camera = camera
	// this.object.rotation.reorder( "YXZ" );

	this.enabled = true;

	this.deviceOrientation = {};
	this.screenOrientation = 0;

	var onDeviceOrientationChangeEvent = function ( event ) {

		scope.deviceOrientation = event;

	};

	var onScreenOrientationChangeEvent = function () {

		scope.screenOrientation = window.orientation || 0;

	};

	// The angles alpha, beta and gamma form a set of intrinsic Tait-Bryan angles of type Z-X'-Y''

	var setObjectQuaternion = function () {

		// var zee = new THREE.Vector3( 0, 0, 1 );
		var zee = new THREE.Vector3( 0, 0, 1 );

		var qScreenRotation = new THREE.Quaternion();

		var q0 = new THREE.Quaternion();

		return function ( quaternion, qCamera, alpha, beta, gamma, orient ) {
			// Rotation constructed directly with quaternion to prevent the Gimbal effect
			// from https://dev.opera.com/articles/w3c-device-orientation-usage/
			// "Using quaternion"
			// "Q.1: Converting deviceorientation angles to a Unit Quaternion representation"

			var _x = beta; // beta value
			var _y = gamma; // gamma value
			var _z = alpha; // alpha value

			var cX = Math.cos( _x/2 );
			var cY = Math.cos( _y/2 );
			var cZ = Math.cos( _z/2 );
			var sX = Math.sin( _x/2 );
			var sY = Math.sin( _y/2 );
			var sZ = Math.sin( _z/2 );

			// ZXY quaternion construction.
			var w = cX * cY * cZ - sX * sY * sZ;
			var x = sX * cY * cZ - cX * sY * sZ;
			var y = cX * sY * cZ + sX * cY * sZ;
			var z = cX * cY * sZ + sX * sY * cZ;

			// quaternion.set(-x, -y, -z, w);
			// qCamera.setFromAxisAngle(zee,  -orient);
			
			q0.set(-x, -y, -z, w);

			quaternion.setFromAxisAngle( zee,  orient );
			quaternion.multiply(q0);

		}

	}();
	this.connect = function() {

		onScreenOrientationChangeEvent(); // run once on load

		window.addEventListener( 'orientationchange', onScreenOrientationChangeEvent, false );
		window.addEventListener( 'deviceorientation', onDeviceOrientationChangeEvent, false );

		scope.enabled = true;

	};

	this.disconnect = function() {

		window.removeEventListener( 'orientationchange', onScreenOrientationChangeEvent, false );
		window.removeEventListener( 'deviceorientation', onDeviceOrientationChangeEvent, false );

		scope.enabled = false;

	};

	this.update = function () {

		if ( scope.enabled === false ) return;

		var alpha  = scope.deviceOrientation.alpha ? THREE.Math.degToRad( scope.deviceOrientation.alpha ) : 0; // Z
		var beta   = scope.deviceOrientation.beta  ? THREE.Math.degToRad( scope.deviceOrientation.beta  ) : 0; // X'
		var gamma  = scope.deviceOrientation.gamma ? THREE.Math.degToRad( scope.deviceOrientation.gamma ) : 0; // Y''
		var orient = scope.screenOrientation       ? THREE.Math.degToRad( scope.screenOrientation       ) : 0; // O

		setObjectQuaternion( scope.object.quaternion, scope.camera.quaternion,alpha, beta, gamma, orient );

	};

	this.connect();

};