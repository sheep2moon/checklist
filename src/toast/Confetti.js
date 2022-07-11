import React, { useCallback, useRef } from "react";
import { useEffect } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { useDispatch, useSelector } from "react-redux";
import { toggleConfetti } from "../redux/toastSlice.js";

const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: "50%",
    left: 0
};

export default function Confetti() {
    const refAnimationInstance = useRef(null);
    const dispatch = useDispatch();
    const { fireConfetti } = useSelector(store => store.toast);

    const getInstance = useCallback(instance => {
        refAnimationInstance.current = instance;
    }, []);

    const makeShot = useCallback((particleRatio, opts) => {
        refAnimationInstance.current &&
            refAnimationInstance.current({
                ...opts,
                origin: { y: 0.7 },
                particleCount: Math.floor(200 * particleRatio)
            });
    }, []);

    useEffect(() => {
        if (fireConfetti) {
            fire();
            dispatch(toggleConfetti());
        }
        // eslint-disable-next-line
    }, [fireConfetti, dispatch]);

    const fire = useCallback(() => {
        makeShot(0.25, {
            spread: 26,
            startVelocity: 55
        });

        makeShot(0.2, {
            spread: 60
        });

        makeShot(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 45
        });
    }, [makeShot]);

    return (
        <>
            <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
        </>
    );
}
