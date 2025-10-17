import { DesignToken } from 'style-dictionary/types';

const button: DesignToken = {
    $type: 'button',
    undo: 'none',
    button: {
        cursor: {
            $value: 'pointer',
        },
        // button sizes
        size: {
            xs: {
                height: {
                    $value: '24px',
                },
                borderRadius: {
                    $value: '4px',
                },
            },
            sm: {
                height: {
                    $value: '28px',
                },
                borderRadius: {
                    $value: '4px',
                },
            },
            md: {
                height: {
                    $value: '32px',
                },
                borderRadius: {
                    $value: '4px',
                },
            },
            lg: {
                height: {
                    $value: '36px',
                },
                borderRadius: {
                    $value: '4px',
                },
            },
            xl: {
                height: {
                    $value: '40px',
                },
                borderRadius: {
                    $value: '4px',
                },
            },
        },
        // button variants
        primary: {
            rest: {
                backgroundColor: {
                    $value: '{color.primary}',
                    dark: {
                        $value: 'red',
                    },
                },
                textColor: {
                    $value: 'white',
                },
            },
            active: {
                backgroundColor: {
                    $value: 'red',
                    dark: {
                        $value: 'red',
                    },
                },
                textColor: {
                    $value: 'white',
                },
            },
            disabled: {
                backgroundColor: {
                    $value: 'red',
                    dark: {
                        $value: 'red',
                    },
                },
                textColor: {
                    $value: 'white',
                    dark: {
                        $value: 'white',
                    },
                },
            },
            hover: {
                backgroundColor: {
                    $value: 'red',
                    dark: {
                        $value: 'red',
                    },
                },
                textColor: {
                    $value: 'white',
                    dark: {
                        $value: 'white',
                    },
                },
            },
            focus: {
                backgroundColor: {
                    $value: 'red',
                    dark: {
                        $value: 'red',
                    },
                },
                textColor: {
                    $value: 'white',
                    dark: {
                        $value: 'white',
                    },
                },
                outline: {
                    color: {
                        $value: 'red',
                        dark: {
                            $value: 'red',
                        },
                    },
                    width: {
                        $value: '1px',
                        dark: {
                            $value: '1px',
                        },
                    },
                    style: {
                        $value: 'solid',
                        dark: {
                            $value: 'solid',
                        },
                    },
                },
            },
        },
        secondary: {
            rest: {
                backgroundColor: {
                    $value: 'red',
                    dark: {
                        $value: 'red',
                    },
                },
                textColor: {
                    $value: 'white',
                },
            },
            active: {
                backgroundColor: {
                    $value: 'red',
                    dark: {
                        $value: 'red',
                    },
                },
                textColor: {
                    $value: 'white',
                },
            },
            disabled: {
                backgroundColor: {
                    $value: 'red',
                    dark: {
                        $value: 'red',
                    },
                },
                textColor: {
                    $value: 'white',
                    dark: {
                        $value: 'white',
                    },
                },
            },
            hover: {
                backgroundColor: {
                    $value: 'red',
                    dark: {
                        $value: 'red',
                    },
                },
                textColor: {
                    $value: 'white',
                    dark: {
                        $value: 'white',
                    },
                },
            },
            focus: {
                backgroundColor: {
                    $value: 'red',
                    dark: {
                        $value: 'red',
                    },
                },
                textColor: {
                    $value: 'white',
                    dark: {
                        $value: 'white',
                    },
                },
                outline: {
                    color: {
                        $value: 'red',
                        dark: {
                            $value: 'red',
                        },
                    },
                    width: {
                        $value: '1px',
                        dark: {
                            $value: '1px',
                        },
                    },
                    style: {
                        $value: 'solid',
                        dark: {
                            $value: 'solid',
                        },
                    },
                },
            },
        },
    },
    display: {
        fontSize: {
            button: {
                '01': { $value: '18px' },
                '02': { $value: '{display.fontSize.body.04}' },
                '03': { $value: '{display.fontSize.body.05}' },
            },
        },
    },
};

export default button;
